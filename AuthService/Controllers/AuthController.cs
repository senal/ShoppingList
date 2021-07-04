using System.Net.Http;
using System.Threading.Tasks;
using AuthService.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace  AuthService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase 
    {                             

        public AuthController(IShoopingContextSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);    
        }

        [HttpGet]
        public Task<string> Index()
        {
            return Task.FromResult("Huh... I'm the auth service. Ha ha ha :)");    
        }

        [HttpGet("user/{name}")]
        public Task<string> Get(string name) 
        {
                return Task.FromResult($"Hello, I'm {name}");
        }
        
    }
}