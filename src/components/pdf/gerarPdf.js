import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'



function gerarPdf(cliente){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const titulo = [{
      text: 'Ficha completa do(a) ' + cliente.nome,
      alignment: 'center',
      fontSize: 25,
      bold: true,
      margin: [25, 0, 0, 45]
    }]


    const corpo = [
		{
      	type: 'none',
			ul: [
				'Nome: ' + cliente.nome,
				'Sobre nome: ' + cliente.sobre_nome,
				'Telefone: ' + cliente.telefone,
        'E-mail: ' + cliente.email,
        'Data de nascimento: ' + cliente.datas,
        'Sexo ' + cliente.sexo,
        'Estado civil: ' + cliente.estado_civil,
        'CPF: ' + cliente.cpf,
        'Renda: R$ '+cliente.renda,
        '*Endereco',
        'Cep: ' + cliente.cep,
        'Rua: ' + cliente.rua,
        'Cidade: ' + cliente.cidade,
        'Estado: ' + cliente.estado,
        'Numero da casa: ' + cliente.n_casa
			],
      alignment: 'center',
      fontSize: 15,
      margin: [0, 20]
		}
    ]

    function Rodape(currentPage, pageCount){
      return[{
      text: currentPage + ' / ' + pageCount,
      alignment: 'right',
      fontSize: 9,
      margin: [0, 10, 20, 0]
      }]

    }

    const configPag ={
      pageSize: 'A4',
      pageMargins: [15, 50, 15, 40],
      header: [titulo],
      content: [corpo],
      footer: Rodape
    }
      pdfMake.createPdf(configPag).download();
  }    


  export default gerarPdf