# Atividade prática : Sistema de Gerenciamento de LIVROS
'''
#classe livros:
'''
class Livro:
    def _init_(self, cadastrodelivro, cadastrodeusuários, titulo, autor, genero, quantidade_desponivel=3):
        self.cadastro = cadastrolivro
        self.cadastro = usuários
        self.titulo = titulo
        self.autor = autor
        self.genero = genero
        self.quantidade_Desponivel = quantidade_desponivel






    def _str_(self):
        return f"'{self.titulo}' por {self.autor.nome}"

class Autor:
    def _init_(self, nome):
        self.nome = nome
        self.livros = []

    def adicionar_livro(self, livro):
        self.livros.append(livro)

    def _str_(self):
        return self.nome

class Usuario:
    def _init_(self,nome):
        self.nome = nome 
        self.livros_emprestados = []

    def emprestar_livro(self, livro):
        if livro.disponivel:
            livro.disponivel = Falseself.livros_emprestados.append(livro)
            print(f"{self.nome} emprestou {livro}")
        else:
            print(f"{livro} não disponível")

    def devolver_livros(self, livro):
       
        print(f"{self.nome} não possui {livro}")
    
class Biblioteca:
    def _init_(self):
        self.livros =[]
        self.autores = []
        self.usuários = []

    def adicionar_livro(self, titulo, nome_autor):
        autor = self. encontrar_ou_criar_autor(nome_autor)
        livro = livro(titulo, Autor)
        autor.adicionar_livro(livro)
        self.livros.append(livro)
    print(f"livro '{titulo}' adicionado à biblioteca")

    def _encontrar_ou_criar_autor(self, nome):
        for autor in self.autores:
         if autor.nome == nome:
                return Autor
        novo_autor = Autor(nome)
        self.autores.append(novo_autor)
        return novo_autor

    def listar_livros(self):
        for livros in self.livros:
            status = "disponível" 

        "emprestado"
        print(f"{livro} - {status}")
        

# Exemplo = biblioteca Biblioteca()
        biblioteca.adicionar_usuario("Antônio Carlos")
        biblioteca.adicionar_usuario("Ana Lucia")
        biblioteca.adicionar_usuario("Pedro Henrrique")
        biblioteca.adicionar_livro("A paciente misterisa,Alex Michaelides") 
        biblioteca.adicionar_livro("É assim que acaba, Colleen Hoover")
        biblioteca.adicionar_livro("Se eu tivesse dito a ela, Laura Nowlin")

        usuário = biblioteca.usuarios[0]
        livro = biblioteca.livros[0]

        usuario = biblioteca.usuarios[0]
        livro = biblioteca.livros[0]

        usuario.esprestar_livro(livro)
        biblioteca.listar_livros()
        usuario.devolver_livro(livro)
        biblioteca.listar_livros()


#Listar Genero

    def genero(self, suspence, romance):
        self.suspence = suspence
        self.romance =romance



    
#Implementar funções para gerenciar os livros

    def _Cadastro1_livro(Livros, autor, genero, quantidade_disponivel):
        self.autor = autor
        self.genero = genero
        self.quantidade_disponivel = quantidade_disponivel
       

 #Cadastro de Usuários   

    def cadastro2_Usuario(nome, telefone, endereco):
        self.nome = nome
        self.telefone = telefone
        self.endereco = endereco

    ista_livros = [A paciente silenciosa, É assim que acaba, Se eu tivesse dito a ela]
    livro1 = livro(A paciente misterisa, Alex Michaelides, suspence, 1)
    livro2 = livro(É assim que acaba, Colleen Hoover, romance, 1)
    livro3 = livro(Se eu tivesse dito a ela, Laura Nowlin, romance, 1)

    usuario1 = usuario("Antônio Carlos, 21964352487, rua10, numero 5 Carmary - Nova Iguaçu")
    usuario2 = usuario("Ana Lucia, 21963214589, rua Felix, numero 165 Miguel Couto - Nova Iguaçu")
    usuario3 = usuario("Pedro Henrrique, 21987543698, rua Bicuíba, numero 225 V. São Theodoro Nova Iguaçu")
