/*Function( constructor
    * expressão new
    * criar um novo objeto
    * this keyword, usado para se referenciar aos
    * atributos e métodos desse novo objeto
    * */ 
// boa prática começar com letra maiúscula as funções construtoras
    function Person (name) {
        this.name = name;
        this.walk = () => {
            return 'andando'
        } 
    }

    const lucas = new Person('Lucas')
    // Ao criar um novo objeto com uma função construtura
    // Essa nova função vai herdar todos suas propriedades e métodos
    console.log(lucas);

    const joao = new Person('Joao')

    // acessando seus métodos
    console.log(lucas.walk());
    console.log(joao.walk());

    // Já existem diversas funções construturas no javascript:

    const teste = new String('sorvete')
    console.log(teste);