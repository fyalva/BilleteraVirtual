using Microsoft.EntityFrameworkCore;
using miBilletera.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models; 

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddRazorPages();
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ClienteDB>(
  options => options.UseSqlServer("Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;TrustServerCertificate=True;"));

builder.Services.AddDbContext<MiDbContext>(
  options => options.UseSqlServer("Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;TrustServerCertificate=True;"));

// Agregar configuración de Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mi API", Version = "v1" });
});

var app = builder.Build();

// Agregar CORS y redirección HTTPS dentro de la configuración de la aplicación
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseCors(); // Habilitar CORS en entorno de desarrollo
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
    app.UseHttpsRedirection(); // Redirección HTTPS
}
app.UseCors();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mi API V1");
});

app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.MapRazorPages();

app.Run();


/*
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
    });
});


//builder.Services.AddCors(options =>
//{
 //   options.AddPolicy(name: MyAllowSpecificOrigins,
 //                     policy =>
 //                     {
  //                        policy.AllowAnyOrigin();
  //                    });
//});
//config.EnableCors();
builder.Services.AddControllers();
builder.Services.AddRazorPages();
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ClienteDB>(
  options => options.UseSqlServer("Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;TrustServerCertificate=True;"));

builder.Services.AddDbContext<MiDbContext>(
  options => options.UseSqlServer("Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;TrustServerCertificate=True;"));
// Agregar configuración de Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mi API", Version = "v1" });
});
var app = builder.Build();
app.UseCors();
// Configurar Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mi API V1");
    c.RoutePrefix = "swagger"; 
});
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}*/

/*
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseForwardedHeaders();
app.UseAuthorization();
   app.Use(async (context, next) =>
    {
            context.Response.Headers.Add("Access-Control-Allow-Origin",
                                         "*");
              context.Response.Headers.Add("Access-Control-Allow-Headers",
                                         "*");     
        await next();
    });
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();*/