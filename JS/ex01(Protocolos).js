/*
    Protocolos são uma forma de comunicação entre computadores através da rede. São um conjunto de regras padronizadas
    que permitem computadores se comunicarem através da internet

    HTTP (HyperText Tranfer Protocol): Serve para solicitar arquivos da rede (texto, imagens, áudios e etc)
    é o protocolo básico dos sites
    SMTP(Simple Mail Transfer Protocol) = protocolo para enviar emails
    TCP(Transmission Control Protocol) = protocolo de transferências (downloads)

    URL(Uniform Resource Locator) = É o endereço do site. É dividido em 3 partes: http://www.algumsite.com.br/index.html
        - O protocolo: é o http do site
        - Servidor: é o nome do site 
        - Arquivo: index.html

    DNS(Domain Name System) = É um protocolo que converte nomes de sites legíveis para humanos (www.algumsite.com)
    em endereços de IP(Internet Protocol) legível para máquinas

    HTML(HyperText Markup Language) = É uma linguagem de marcação, responsável pelo texto e elementos presentes no site, definidas
    por tags.
        - Possui duas partes: head e body
            - No Head: é inserido as configurações de documento, como links, folhas de estilo (CSS) e scripts JS
            - No Body: é inserido as tags, ou seja, a parte visual do HTML

    Uma boa prática é inserir o script JS (o link que chama o arquivo JS) na última linha do body, porque assim garante que
    o arquivo JS será carrgado depois que todo o html foi carregado

    DOM(Document Object Model) = É uma interface de programação para os documentos HTML e XML. Representa a página de forma que
    as linguagens de programação possam alterar a estrutura do documento. Representação de dados dos objetos que compõe a estrutura 
    e o conteúdo de um documento na WEB(é o HTML convertido para JS). É um espelho do HTML.
*/