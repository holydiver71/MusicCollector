namespace MusicCollector.Api
{
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        // Health check endpoint for MusicCollector API
        // Returns a simple status message indicating the API is running
        // Follows Microsoft coding style and SOLID principles
        app.MapGet("/api/health", () =>
        {
            var healthStatus = new HealthStatus
            {
                Status = "Healthy",
                Timestamp = DateTime.UtcNow
            };
            return Results.Ok(healthStatus);
        })
        .WithName("GetHealthStatus")
        .WithOpenApi();

        app.UseCors(policy =>
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader());

        app.Run();
    }
}

/// <summary>
/// Represents the health status of the MusicCollector API.
/// </summary>
public class HealthStatus
{
    /// <summary>
    /// Status message (e.g., "Healthy").
    /// </summary>
    public string Status { get; set; } = string.Empty;

    /// <summary>
    /// Timestamp of the health check (UTC).
    /// </summary>
    public DateTime Timestamp { get; set; }
}
}
/// <summary>
/// Represents the health status of the MusicCollector API.
/// </summary>
public class HealthStatus
{
    /// <summary>
    /// Status message (e.g., "Healthy").
    /// </summary>
    public string Status { get; set; } = string.Empty;

    /// <summary>
    /// Timestamp of the health check (UTC).
    /// </summary>
    public DateTime Timestamp { get; set; }
}

