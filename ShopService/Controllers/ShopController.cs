using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ShopService.Controlllers
{

    [ApiController]
    [Route("[controller]")]
    public class ShopController: ControllerBase 
    {
        public ShopController()
        {
            
        }


        [HttpGet]
        public Task<string> Get()
        {
            return Task.FromResult("Hey, this is the shop service");        
        }
    }
}