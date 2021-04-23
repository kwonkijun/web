# 빈 리스트 생성
message_list = []

# 5번 반복한다 0,1,2,3,4
for i in range(5):
    message = input("기분이 좋아지는 문장을 입력 >>>")
    # 리스트에 추가하기
    message_list.append(message)

print(message_list)