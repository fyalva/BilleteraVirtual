using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using miBilletera.Data;
using miBilletera.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using static miBilletera.Models.ClienteUsuario;


namespace miBilletera.Controllers
{ //config.EnableCors(); [EnableCors( "*")]

    [Route("[controller]")]
    public class ClienteUsuarioController : Controller
    {
       // private readonly ILogger<ClienteUsuarioController> _logger;
        private readonly ClienteDB _context;
         public ClienteUsuarioController(ClienteDB context)
        {
            _context = context;
        }

       /* public ClienteUsuarioController(ILogger<ClienteUsuarioController> logger, ClienteDB context)
        {
            _logger = logger;
            _context= context;
        }*/
[HttpGet (Name = "GetClienteCliente"), EnableCors("AllowOrigin")]
public async Task<ActionResult<IEnumerable<ClienteUsuario>>> GetClientes()
{    return await _context.Clientes.ToListAsync();
   /* ClienteUsuario clienteUsuario = new ClienteUsuario();
    clienteUsuario.apellido = "";
    List<ClienteUsuario> Clientes = new List<ClienteUsuario>();
    Clientes.Add(clienteUsuario);
    return  Clientes.ToList();*/
    //return await _context.Clientes.ToListAsync();
}/*
 [HttpPost(Name = "IngresarClienteUsuarios"), EnableCors("AllowOrigin")]
public async Task<IActionResult> CrearClientes([FromBody] ClienteUsuario Clientes) 
{
    if (ModelState.IsValid)
    {
        _context.Clientes.Add(Clientes);
        await _context.SaveChangesAsync();
        return CreatedAtAction("ObtenerCliente", new { id = Clientes.Idcliente}, Clientes);
               // _context.TuTabla.Add(modelo);
    }
    return BadRequest(ModelState);
}*/
}
}