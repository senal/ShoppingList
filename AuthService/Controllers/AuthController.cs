using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace  AuthService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase 
    {                             
        public AuthController()
        {
            
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