#!/data/data/com.termux/files/usr/bin/bash

echo "🔄 Atualizando GanTerminal..."

INSTALL_DIR="$HOME/ganterminal"

# 1. checar se existe instalação
if [ ! -d "$INSTALL_DIR" ]; then
  echo "❌ GanTerminal não está instalado."
  echo "👉 Rode install.sh primeiro."
  exit 1
fi

cd "$INSTALL_DIR"

# 2. atualizar código do Git
echo "📡 Baixando atualizações..."
git pull origin main

# 3. instalar dependências (caso tenha mudanças)
echo "📦 Atualizando dependências..."
npm install

# 4. finalizar
echo "✅ GanTerminal atualizado com sucesso!"
echo "🚀 Para rodar: node src/index.js"