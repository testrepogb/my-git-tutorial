#!/usr/bin/env python
#-*- mode: python -*-

from subprocess import Popen, PIPE
import sys

def run(command):
    p = Popen(command.split(), stdout=PIPE, stderr=PIPE)
    p.wait()
    return p.returncode, p.stdout.read().strip().split(), p.stderr.read()


def precommit():
  _, files_modified, _= run("git diff-index --name-only HEAD")
  i=1
  for fname in files_modified:

    file = open(fname)
    while i==1:
       line = file.readline()
       if not line:
          break
       elif len(line)>80:
          print("Commit failed: Line greater than 80 characters")
          return 1
    return 0
sys.exit(precommit())
