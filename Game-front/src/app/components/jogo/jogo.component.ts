import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Jogo } from 'src/app/jogo';
import { JogosService } from 'src/app/jogos.service';

@Component({
    selector: 'app-jogo',
    templateUrl: './jogo.component.html',
    styleUrls: ['./jogo.component.css'],
})
export class JogoComponent implements OnInit {
    public jogos: Jogo[];
    public tituloJogo: string;
    public formularioJogo: any;

    public visibilidadeTabela: boolean = true;
    public visibilidadeFormulario: boolean = false;

    constructor(private jogosService: JogosService) {}

    ngOnInit(): void {
        this.jogosService.PegarTodos().subscribe(resultado => {
            this.jogos = resultado;
        });
        // this.jogosService.getAll().then(jogo => {
        //     this.jogos = jogo;
        //     console.log(this.jogos);
        // });
    }
    ExibirFormularioCadastro(): void {
        this.visibilidadeTabela = false;
        this.visibilidadeFormulario = true;
        this.tituloJogo = 'Novo Jogo';
        this.formularioJogo = new FormGroup({
            jogo: new FormControl(null),
            genero: new FormControl(null),
            ano_lancamento: new FormControl(null),
            empresa: new FormControl(null),
        });
    }
    ExibirFormularioAtualizacao(game_id: number): void {
        this.visibilidadeTabela = false;
        this.visibilidadeFormulario = true;

        this.jogosService.PegarPeloId(game_id).subscribe(resultado => {
            this.tituloJogo = `Atualizar ${resultado.jogo} ${resultado.genero}`;

            this.formularioJogo = new FormGroup({
                game_id: new FormControl(resultado.game_id),
                jogo: new FormControl(resultado.jogo),
                genero: new FormControl(resultado.genero),
                ano_lancamento: new FormControl(resultado.ano_lancamento),
                empresa: new FormControl(resultado.empresa),
            });
        });
    }
    EnviarFormulario(): void {
        const jogo: Jogo = this.formularioJogo.value;

        if (jogo.game_id > 0) {
            this.jogosService.AtualizarJogo(jogo).subscribe(resultado => {
                this.visibilidadeFormulario = false;
                this.visibilidadeTabela = true;
                alert('Jogo atualizado com sucesso');
                this.jogosService.PegarTodos().subscribe(registros => {
                    this.jogos = registros;
                });
            });
        } else {
            this.jogosService.SalvarJogo(jogo).subscribe(resultado => {
                this.visibilidadeFormulario = false;
                this.visibilidadeTabela = true;
                alert('Jogo inserido com sucesso');
                this.jogosService.PegarTodos().subscribe(registros => {
                    this.jogos = registros;
                });
            });
        }
    }
    // this.jogosService.getAll().subscribe(registros => {
    //     this.jogos = registros;
    // });
    Voltar(): void {
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
    }
    // async adicionarJogo() {
    //     const addGame = await this.jogosService.addJogo(this.novoJogo);
    //     console.log('Jogo adicionado:', addGame);
    // }
}
