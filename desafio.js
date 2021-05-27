const listaCompras = {  
    batata: 13,  
    sabao: 3, 
    abobrinha: 5,  
    toalha: 1, 
    cenoura: 8,  
    balas: 10, 
    xuxu: 0
};

const sleep = (ms) => { 
    return new Promise(resolve => setTimeout(resolve, ms))
};

const retornoFuncaoPegar = (item) => {
     await sleep(3000);
     return listaCompras[item]
};
    

const looping = async _ => { 
     console.log('Começou') 
     console.log(item, retornoFuncaoPegar) 
     console.log('Terminou') 
}