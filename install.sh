#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 GanTerminal Installer iniciado..."

INSTALL_DIR="$HOME/ganterminal"

# 1. remover versão antiga se existir
if [ -d "$INSTALL_DIR" ]; then
  echo "🧹 Removendo versão antiga do GanTerminal..."
  rm -rf "$INSTALL_DIR"
fi

# 2. atualizar sistema
echo "📦 Atualizando Termux..."
pkg update -y && pkg upgrade -y

# 3. instalar dependências básicas
echo "⚙️ Instalando dependências..."
pkg install -y nodejs git

# 4. clonar novo projeto
echo "📥 Baixando GanTerminal..."
git clone https://github.com/Jofunogan/GanTerminal.git "$INSTALL_DIR"

cd "$INSTALL_DIR"

# 5. instalar dependências do projeto
echo "📦 Instalando dependências Node..."
npm install

# 6. mensagem final
echo "✅ Instalação concluída!"
echo ""
echo "👉 Para iniciar:"
echo "cd $INSTALL_DIR && node src/index.js"
echo ""
echo "🔄 Criando comando de update..."

cp update.sh "$INSTALL_DIR/update.sh"
chmod +x "$INSTALL_DIR/update.sh"