using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using miBilletera.Models;
using miBillpassetera.Models;
using Microsoft.EntityFrameworkCore;

namespace miBilletera.Data
{ 
    public class MiDbContext : DbContext
{
    public MiDbContext(DbContextOptions<MiDbContext> options) : base(options)
    {
    }
public DbSet<Usuario> Usuario { get; set; } = null!;

 

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuraciones de modelo (si es necesario)
    }
}
}