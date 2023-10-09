using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FoodItemAPI.Models;

public class FoodContext : DbContext
{

  protected readonly IConfiguration Configuration;

  public FoodContext(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
  }



  //public FoodContext(DbContextOptions<FoodContext> options) : base(options) {}

  public DbSet<FoodItem> FoodItems { get; set; } = null!;
}
