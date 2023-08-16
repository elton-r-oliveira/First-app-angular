using GameApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameApi.Controllers
{
    [Route("api/")]
    [ApiController]
    public class JogoController : ControllerBase
    {
        private readonly Context _dbContext;
        public JogoController(Context context)
        {
            _dbContext = context;
        }
        [HttpGet("buscar-todos")]
        public async Task<ActionResult<IEnumerable<JogoModel>>> BuscarTodosJogos()
        {
            return await _dbContext.Jogos.ToListAsync();
        }
        [HttpGet("buscar-por-id")]
        public async Task<ActionResult<JogoModel>> BuscarPorId(int id)
        {
            JogoModel jogo = await _dbContext.Jogos.FindAsync(id);
            if (jogo == null) 
                return NotFound("Jogo não encontrado.");

            return jogo;
        }
        [HttpPost("adicionar")]
        public async Task<ActionResult<JogoModel>> Adicionar(JogoModel jogo)
        {
             await _dbContext.Jogos.AddAsync(jogo);
             await _dbContext.SaveChangesAsync();
            return Ok("Jogo adicionado!");
        }
        [HttpPut("atualizar")]
        public async Task<ActionResult<JogoModel>> Atualizar(JogoModel jogo)
        {
            _dbContext.Jogos.Update(jogo);
            await _dbContext.SaveChangesAsync();
            return Ok("Jogo atualizado!");
        }
        [HttpDelete("deletar")]
        public async Task<ActionResult<JogoModel>> Deletar(int id)
        {
            JogoModel jogo = await _dbContext.Jogos.FindAsync(id);
            _dbContext.Remove(jogo);
            await _dbContext.SaveChangesAsync();
            return Ok("Jogo removido!");
        }
    }
}
