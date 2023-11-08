using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;


namespace miBillpassetera.Models
{
    
    public class Usuario
    {
         [Key]
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  
      public int UsuarioId{ get; set; }
  
    public string Nombre { get; set; } = "";
  
   
    
    public string Email { get; set; }= "";
    
  
    public string Password { get; set; }= "";
   
    
    public string terminos { get; set; }="";
   

    }

}