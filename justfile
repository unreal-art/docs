set shell := ["sh", "-c"]
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]
#set allow-duplicate-recipe
#set positional-arguments
set dotenv-filename := ".env"
set export


import "local.Justfile"


OPENAI_URL:=env("NEXT_PUBLIC_OPENAI_URL","https://openai.unreal.art")
