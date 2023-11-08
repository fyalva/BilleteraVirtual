using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using miBilletera.Data;
using miBilletera.Models;
using miBillpassetera.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace miBilletera.Controllers
{//[EnableCors(origins: "*", headers: "*", methods: "*")] esto es en v2019 o 2022
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController : Controller
    {
        public readonly MiDbContext _context;
   
        public UsuarioController(MiDbContext context)
        {
            _context = context;
        }

        // Obtener todos los usuarios
       [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            return _context.Usuario.ToList();
        }

        // Obtener un usuario por ID
 [HttpGet("{id:int}")]
public async Task<ActionResult<Usuario>> GetUsuario(int id)
{   
       var usuario = await _context.Usuario.FindAsync(id);
    if (usuario == null)
    {
        return NotFound();
    }
    return usuario;
}        // Crear un nuevo usuario
       // [HttpPost ( Name = "postUsuario"), EnableCors("AllowOrigin")]
 [HttpPost]
        public async Task<ActionResult<Usuario>> CrearUsuario(Usuario usuario)
        {
            if (usuario == null)
            {
                return BadRequest();
            }
            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsuario), new { id = usuario.UsuarioId}, usuario);
        }

        // Actualizar un usuario por ID
        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarUsuario(int id, Usuario usuario)
        {
            if (id != usuario.UsuarioId|| usuario == null)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // Eliminar un usuario por ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarUsuario(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuario.Any(e => e.UsuarioId== id);
        }
    
    ///ejemmplo Matias
    
    }
}