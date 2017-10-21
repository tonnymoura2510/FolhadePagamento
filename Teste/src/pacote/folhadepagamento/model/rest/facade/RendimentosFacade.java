package pacote.folhadepagamento.model.rest.facade;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pacote.folhadepagamento.model.FuncionariosModel;
import pacote.folhadepagamento.model.RendimentosModel;

@Path("/rendimentos")
@Produces({MediaType.APPLICATION_JSON,
		MediaType.APPLICATION_XML})
@Consumes(MediaType.APPLICATION_JSON)	

public class RendimentosFacade {
	
	static List<RendimentosModel> listaDeRendimentos = new ArrayList<RendimentosModel>();
	
	static{
		listaDeRendimentos.add(new RendimentosModel(1, "Agosto", 1500.00, 6.0, 8.0, 80.00, 92.00, 45.00, new FuncionariosModel(1, "Edson Inácio", "990.952.381-72")));
		listaDeRendimentos.add(new RendimentosModel(2, "Agosto", 911.00, 5.0, 6.0, 40.00, 87.00, 94.00, new FuncionariosModel(2, "João Batista", "800.745.385-88")));
		listaDeRendimentos.add(new RendimentosModel(3, "Agosto", 2888.00, 7.0, 1.0, 60.00, 35.00, 58.00, new FuncionariosModel(3, "Pedro dos Santos", "001.999.381-00")));

	}
	
	@GET
	public List<RendimentosModel> getRendimentos(){
		return listaDeRendimentos;
	}
	
	@POST
	public RendimentosModel salvar(RendimentosModel rendimento) {
		System.out.println("Salvar @Post");
		listaDeRendimentos.add(rendimento);
		return rendimento;
		
	}
	
	@PUT
	public void atualizar(RendimentosModel rendimento) {
		System.out.println("atualizar @Put");
		listaDeRendimentos.remove(rendimento);
		listaDeRendimentos.add(rendimento);
	}
	
	@DELETE
	@Path("/{codigoFuncionario}")
	public void excluir(@PathParam("codigoFuncionario") Integer codigoRendimento){
		System.out.println("Excluir @DELETE");
		RendimentosModel rendimento = new RendimentosModel();
		rendimento.setCodigo(codigoRendimento);
		listaDeRendimentos.remove(rendimento);
	}

}





















