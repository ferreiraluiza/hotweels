import con from "./connection.js";

export async function inserirListaCarros(carro){
    const comando = `
        insert into tb_carro(ds_marca, ds_modelo, nr_ano, vr_preco, img_carro, dt_inclusao)
        values(?, ? , ?, ?, ?)`
    
    const resposta = await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.img, carro.data])
    let info = resposta[0]

    return info.insertId
}

export async function consultarListaCarros(){
    const comando = `
        select id_carro  id,
                ds_marca        marca,
                ds_modelo       modelo,
                nr_ano          ano,
                vl_preco        preco,
                img_carro       imagem,
                dt_inclusao     data
        
        from tb_carro`

    let resposta = await con.query(comando)
    let registros = resposta[0]

    return registros
}

export async function alterarCarro(carro, id){
    const comando = `
        update from tb_lista_negra
        set     ds_marca = ?,
                ds_modelo = ?,
                nr_ano = ?,
                vl_preco = ?,
                img_carro = ?,
        where   dt_inclusao = ?  
        `
        let resposta = await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.img, carro.data])

        let info = resposta[0]
        return info.affectedRows
    
}

export async function removerCarro(id){
    const comando = `
            delete from tb_carro
            where id_carro = ?
            `
    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    return info.affectedRows  
}