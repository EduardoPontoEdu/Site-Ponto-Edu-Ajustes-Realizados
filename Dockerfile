# Usa imagem leve com NGINX estável
FROM nginx:stable-alpine

# Remove conteúdo padrão da imagem
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos HTML para o diretório raiz do NGINX
COPY ./html/ /usr/share/nginx/html/

# Expõe a porta padrão
EXPOSE 80

# Mantém o NGINX em execução no primeiro plano
CMD ["nginx", "-g", "daemon off;"]
