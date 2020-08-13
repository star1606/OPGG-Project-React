import React from "react";
import { Link } from "react-router-dom";
const HomeListItem = () => {
  return (
    <div class="community-best__content-left">
      {/* <!-- 커뮤니티 ul 태그--> */}
      <ul
        class="community-article__list community-article__list--popular"
        data-type="Popular"
      >
        {/* <!-- 커뮤니티 li 컴포넌트--> */}
        <li class="community-article__list__item">
          <Link to="/community">
            <div class="community-article__list__item__rank green">1</div>

            <div class="community-article__list__item__title">
              <span>잼민이가 해낸일</span>
              <em>[117]</em>
            </div>
            <div class="community-article__list__item__sub">
              <div class="community-article__list__item__sub__item">
                <span
                  class="_timeago _timeCountAssigned tip"
                  data-datetime="1596151624"
                  data-type=""
                  data-interval="60"
                  title="2020년 7월 31일 오전 8시 27분"
                >
                  9시간 전
                </span>
              </div>
              <div class="community-article__list__item__sub__item">
                피파망해라
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeListItem;
