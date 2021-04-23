while True:
    menu = int(input("메뉴를 입력하세요\n1.게임 시작 2.랭킹 보기 3.게임 종료>>>"))
    
    if menu == 1:
        print("***게임 시작***")
    elif menu == 2:
        print("***랭킹 보기***")
    elif menu == 3:
        print("***게임을 종료합니다***")
        break
    else:
        print("다시 입력해주세요")