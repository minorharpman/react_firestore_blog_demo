FOR /F "tokens=*" %%G IN ('DIR /B /AD /S *.git*') DO RMDIR /S /Q "%%G"