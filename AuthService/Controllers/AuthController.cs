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
            return Task.FromResult("Huh... I'm the auth service. with new changes");    
        }
    }
}