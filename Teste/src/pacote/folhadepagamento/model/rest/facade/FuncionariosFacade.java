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

@Path("/funcionarios")
@Produces({MediaType.APPLICATION_JSON,
		MediaType.APPLICATION_XML})
@Consumes(MediaType.APPLICATION_JSON)	

public class FuncionariosFacade {
	
	static List<FuncionariosModel> listaDeFuncionarios = new ArrayList<FuncionariosModel>();
	
	static{
		listaDeFuncionarios.add(new FuncionariosModel(1, "Edson Inácio", "990.952.3812-72"));
		listaDeFuncionarios.add(new FuncionariosModel(2, "João Batista", "800.745.385-88"));
		listaDeFuncionarios.add(new FuncionariosModel(3, "Pedro dos Santos", "001.999.381-00"));

	}
	
	@GET
	public List<FuncionariosModel> getFuncionarios(){
		return listaDeFuncionarios;
	}
	
	@POST
	public FuncionariosModel salvar(FuncionariosModel funcionario) {
		System.out.println("Salvar @Post");
		listaDeFuncionarios.add(funcionario);
		return funcionario;
		
	}
	
	@PUT
	public void atualizar(FuncionariosModel funcionario) {
		System.out.println("atualizar @Put");
		listaDeFuncionarios.remove(funcionario);
		listaDeFuncionarios.add(funcionario);
	}
	
	@DELETE
	@Path("/{codigoFuncionario}")
	public void excluir(@PathParam("codigoFuncionario") Integer codigoFuncionario){
		System.out.println("Excluir @DELETE");
		FuncionariosModel funcionario = new FuncionariosModel();
		funcionario.setCodigo(codigoFuncionario);
		listaDeFuncionarios.remove(funcionario);
	}

}





















