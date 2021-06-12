using System.Collections.Generic;
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


        [HttpGet("name")]
        public Task<string> Get(string name)
        {
            return Task.FromResult("Hey, this is the shop service");        
        }

        [HttpGet]
        public Task<List<string>> GetAll () 
        {
            List<string> list = new() { "Coles", "WoolWorths", "Aldi", "IGA", "Costco", "FoodWorks"};
            return Task.FromResult(list);
        }

    }
}