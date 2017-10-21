package pacote.folhadepagamento.rest;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/exemplo")
public class ExemploDeTeste {

	@GET
	public String executaGet() {
		return "executando um get...";
	}
	
	@POST
	public String executaPost() {
		return "executando um post...";
	}
}
