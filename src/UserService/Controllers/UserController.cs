using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UserService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase {
        
        public UserController(){}

        [HttpGet]
        public Task<string> Get() 
        {
            return Task.FromResult<string>("Hello, this is the user service");
        }
    }
}