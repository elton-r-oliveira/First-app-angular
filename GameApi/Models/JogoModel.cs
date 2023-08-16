using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameApi.Models
{
    public class JogoModel
    {
        [Key]
        public int game_id { get; set; }
        public string jogo { get; set; }
        public string genero { get; set; }
        public int ano_lancamento { get; set; }
        public string empresa { get; set; }
    }
}
