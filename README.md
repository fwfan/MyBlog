# 启动服务
systemctl start nginx-service

# 重启服务
systemctl restart nginx-service

# 关闭服务
systemctl stop nginx-service

# 启动、重启和关闭Mysql服务
sudo service mysql start      开启
sudo service mysql stop       关闭 
sudo service mysql restart    重起

或 
sudo service mariadb start      开启
sudo service mariadb stop       关闭 
sudo service mariadb restart    重起

或 
sudo service mariadb-server start      开启
sudo service mariadb-server stop       关闭 
sudo service mariadb-server restart    重起

# 修改端口
 vi /etc/my.cnf.d/server.cnf                   [On CentOS/RHEL]
 vi /etc/mysql/mariadb.conf.d/50-server.cnf    [On Debian/Ubuntu]


# mysql 相关设置
grant all privileges on *.* to 'root'@'%' identified by '*Pa55Word*' with grant option;
vim /etc/mysql/mariadb.conf.d/50-server.cnf