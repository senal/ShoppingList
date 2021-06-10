using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ListService.Controller
{

    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        public ListController()
        {
            
        }


        [HttpGet]
        public Task<string> Get()
        {
            return Task.FromResult("Alooo, This is the list service");
        }
    }
    
}