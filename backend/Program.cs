using Microsoft.EntityFrameworkCore;
using Mission10.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "https://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var dbPath = Path.Combine(Directory.GetCurrentDirectory(), "BowlingLeague.sqlite");

builder.Services.AddDbContext<BowlingContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();