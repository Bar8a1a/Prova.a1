using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AcessoTotal",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AcessoTotal");

app.MapGet("/", () => "API de Chamados Rodando!");

app.MapGet("/api/chamado/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Chamados.Any())
    {
        return Results.Ok(ctx.Chamados.ToList());
    }
    return Results.NotFound("Nenhum chamado encontrado");
});

app.MapPost("/api/chamado/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Chamado chamado) =>
{
    chamado.Status = "Aberto";
    ctx.Chamados.Add(chamado);
    ctx.SaveChanges();
    return Results.Created($"/api/chamado/{chamado.ChamadoId}", chamado);
});

app.MapPatch("/api/chamado/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
{
    Chamado? chamado = ctx.Chamados.FirstOrDefault(x => x.ChamadoId == id);

    if (chamado is null) return Results.NotFound("Chamado não encontrado");

    if (chamado.Status == "Aberto")
    {
        chamado.Status = "Em atendimento";
    }
    else if (chamado.Status == "Em atendimento")
    {
        chamado.Status = "Resolvido";
    }

    ctx.Chamados.Update(chamado);
    ctx.SaveChanges();
    return Results.Ok(chamado);
});

app.MapGet("/api/chamado/naoresolvido", ([FromServices] AppDataContext ctx) =>
{
    var lista = ctx.Chamados.Where(c => c.Status != "Resolvido").ToList();
    return Results.Ok(lista);
});

app.MapGet("/api/chamado/resolvidos", ([FromServices] AppDataContext ctx) =>
{
    var lista = ctx.Chamados.Where(c => c.Status == "Resolvido").ToList();
    return Results.Ok(lista);
});

app.Run();

