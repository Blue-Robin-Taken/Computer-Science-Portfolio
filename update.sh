git init
git remote add origin git@github.com:Blue-Robin-Taken/MerlinLiason.git
git reset --hard HEAD
git pull git@github.com:Blue-Robin-Taken/MerlinLiason.git
chmod u+x setPermissions.sh
chmod u+x update.sh
./setPermissions.sh
echo "updated"