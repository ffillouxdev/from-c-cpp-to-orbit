CC = gcc
CFLAGS = -Wall -Wextra -std=c11 -Iinclude
SRC = src/main.c
OUT = build/c-to-orbit

all:
	$(CC) $(CFLAGS) $(SRC) -o $(OUT) -lm

clean:
	rm -f build/*
