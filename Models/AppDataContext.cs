using Microsoft.EntityFrameworkCore;
using API.Models;

public class AppDataContext : DbContext
{
    public DbSet<Chamado> Chamados { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=app_barbara.db");
    }
}

public class Chamado
{
    public string ChamadoId { get; set; } = Guid.NewGuid().ToString();
    public string Descricao { get; set; }
    public string Status { get; set; }
    public string DataCriacao { get; set; } = DateTime.Now.ToString("dd/MM/yyyy HH:mm");
}
