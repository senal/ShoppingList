using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers { 


[Route("api/[controller]")]
[ApiController]
public class ListController : ControllerBase
{
    // GET: api/<ListController>
    [HttpGet]
    public IEnumerable<string> Get()
    {
        return new string[] { "value1", "value2" };
    }

    // GET api/<ListController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/<ListController>
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/<ListController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<ListController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

}

}