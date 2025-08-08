using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;


namespace MusicCollector.Tests
{
    /// <summary>
    /// Unit tests for the /api/health endpoint of the MusicCollector API.
    /// </summary>
public class HealthEndpointTests : IClassFixture<WebApplicationFactory<MusicCollector.Api.Program>>
    {
        private readonly HttpClient _client;

public HealthEndpointTests(WebApplicationFactory<MusicCollector.Api.Program> factory)
        {
            // Create a test client for the API
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetHealth_ReturnsHealthyStatus()
        {
            // Act: Call the /api/health endpoint
            var response = await _client.GetAsync("/api/health");

            // Assert: Response is successful
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);

            var json = await response.Content.ReadAsStringAsync();
            Assert.Contains("Healthy", json);
        }
    }
}
