import random

def getRandomNumber():
    number = random.randint(1,10)
    return number

nums = []

for i in range(10000):
    nums.append(getRandomNumber())

print(nums.count(1)/10000, nums.count(2)/10000, nums.count(3)/10000, nums.count(4)/10000, nums.count(5)/10000)


# 로또 번호 생성기
# 1 ~ 45
# 6개 뽑기(중복해서 뽑으면 안된다)
# 1 5 22 34 42 44