Configurando e Executando sua Aplicação Next.js com Shadcn UI

1. Criar a Estrutura da Aplicação:
Primeiro, certifique-se de que sua pasta de aplicação esteja pronta para receber o projeto.

2. Abrir o PowerShell:
Abra o PowerShell e navegue até o diretório recém-criado da sua aplicação.

3. Inicializar o Projeto Next.js:
Execute o seguinte comando para criar um novo projeto Next.js dentro do diretório atual:

npx create-next-app@latest ./

Este comando configurará toda a estrutura inicial necessária para começar a desenvolver sua aplicação.

4. Configurar Tailwind CSS com Shadcn UI:
Para estilizar sua aplicação com Tailwind CSS usando as configurações recomendadas pelo Shadcn UI, siga os passos abaixo:

npx shadcn-ui@latest init

5. Adicionar Componentes Extras:
Utilize os comandos abaixo para adicionar componentes úteis ao seu projeto:

npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add button
Estes componentes são essenciais para melhorar a usabilidade e a interatividade da sua aplicação.

6. Instalar Suporte a Temas:
Para permitir que os usuários alternem entre o modo claro e escuro, instale o pacote next-themes:

npm install next-themes
Este pacote simplifica a implementação de diferentes temas na sua aplicação.

7. Adicionar Ícones:
Para adicionar ícones ao seu projeto, instale o pacote lucide-react:
npm install lucide-react@0.92.0

8. Executar a Aplicação:

npm run dev

Acesse sua aplicação em http://localhost:3000 e comece a explorar e desenvolver seu projeto!