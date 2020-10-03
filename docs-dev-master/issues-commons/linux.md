# Issues: Linux

## External file changes sync may be slow: The current inotify(7) watch limit is too low 
Solução do Gulp Watch no Ubuntu
```
echo `fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
```

## Attempted to call function "igbinary_unserialize" from namespace "Vox\Sigfacil\AppBundle\EventListener".

```
app/console cache:clear OU bin/console cache:clear
sudo permissoes.sh
```

## Warning: file_put_contents(/vox/sigfacil/app/cache/dev/appDevDebugProjectContainerDeprecations.log): failed to open stream: Permission denied
```
sudo permissoes.sh
```