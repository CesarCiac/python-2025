# Exemplo de uso:

# Criando e escrevendo em um arquivo
with open('dados.txt', 'w') as arquivo:
    arquivo.write("Nome: cesar\nIdade: 60\nProfissão: tectelecom")

# Lendo o arquivo
with open('dados.txt', 'r') as arquivo:
    conteudo = arquivo.read()
    print(conteudo)

# Adicionando mais dados (append)
with open('dados.txt', 'a') as arquivo:
    arquivo.write("\nEmail: cesar@gmail.com")

# Excluindo o arquivo (importar módulo 'os')
import os
if os.path.exists('dados.txt'):
    os.remove('dados.txt')
    print("Arquivo removido!")
else:
    print("Arquivo não encontrado.")


 