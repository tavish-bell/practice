first = ["a", "a", "b", "c"]
second = ["c", "d", "e", "f"]
# cast to set to remove duplicates; combine into one list
result = list(set(first) | set(second))
# print result
print(result)
