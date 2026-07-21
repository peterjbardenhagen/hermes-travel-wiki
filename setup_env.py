import os

env_path = "C:/Users/PeterBardenhagen/AppData/Local/hermes/.env"
project_env_path = "C:/development/hermes-travel-wiki/.env.local"
prefix = "OPENROUTER_API_KEY=***

with open(env_path) as f:
    for line in f:
        if line.startswith(prefix):
            key = line.strip().split("=", 1)[1]
            with open(project_env_path, "w") as out:
                out.write(prefix + key + "\n")
            print("Written key, length=" + str(len(key)) + ", starts=" + key[:8])
            break
