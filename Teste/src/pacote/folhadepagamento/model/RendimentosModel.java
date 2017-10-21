package pacote.folhadepagamento.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RendimentosModel implements Serializable{

	private static final long serialVersionUID = 1L;
	
	Integer codigo;
	String referencia;
	Double salarioBase;
	Double horaExtraCinq;
	Double horaExtraCem;
	Double gratificacao;
	Double inss;
	Double impostoRenda;
	
	FuncionariosModel funcionariosModel;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RendimentosModel other = (RendimentosModel) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}

	public RendimentosModel() {
		
	}
	

	public void CalcularSalario(){
		salarioBase = salarioBase + (horaExtraCinq * 2) + (horaExtraCem * 4) + gratificacao;
	}
	

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getReferencia() {
		return referencia;
	}

	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}

	public Double getSalarioBase() {
		return salarioBase;
	}

	public void setSalarioBase(Double salarioBase) {
		this.salarioBase = salarioBase;
	}

	public Double getHoraExtraCinq() {
		return horaExtraCinq;
	}

	public void setHoraExtraCinq(Double horaExtraCinq) {
		this.horaExtraCinq = horaExtraCinq;
	}

	public Double getHoraExtraCem() {
		return horaExtraCem;
	}

	public void setHoraExtraCem(Double horaExtraCem) {
		this.horaExtraCem = horaExtraCem;
	}

	public Double getGratificacao() {
		return gratificacao;
	}

	public void setGratificacao(Double gratificacao) {
		this.gratificacao = gratificacao;
	}

	public Double getInss() {
		return inss;
	}

	public void setInss(Double inss) {
		this.inss = inss;
	}

	public Double getImpostoRenda() {
		return impostoRenda;
	}

	public void setImpostoRenda(Double impostoRenda) {
		this.impostoRenda = impostoRenda;
	}

	public FuncionariosModel getFuncionariosModel() {
		return funcionariosModel;
	}

	public void setFuncionariosModel(FuncionariosModel funcionariosModel) {
		this.funcionariosModel = funcionariosModel;
	}

	public RendimentosModel(Integer codigo, String referencia, Double salarioBase, Double horaExtraCinq,
			Double horaExtraCem, Double gratificacao, Double inss, Double impostoRenda,
			FuncionariosModel funcionariosModel) {
		this.codigo = codigo;
		this.referencia = referencia;
		this.salarioBase = salarioBase;
		this.horaExtraCinq = horaExtraCinq;
		this.horaExtraCem = horaExtraCem;
		this.gratificacao = gratificacao;
		this.inss = inss;
		this.impostoRenda = impostoRenda;
		this.funcionariosModel = funcionariosModel;
	}
	
	
	
}
