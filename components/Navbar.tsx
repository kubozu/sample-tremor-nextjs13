import { PuzzleIcon } from "@heroicons/react/solid";
import { KeyIcon } from "@heroicons/react/outline";
import { Button } from "@tremor/react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <p>Navbar サンプル（シンプル）</p>
      <div className="mx-auto flex flex-col md:flex-row container p-5 items-center bg-gray-200">
        {/* 企業ロゴ等  */}
        <Link
          className="flex items-center font-bold mb-4 md:mb-0 text-gray-700 bg-gradient-to-br from-red-100 to-red-400 rounded-xl p-5"
          href="/"
        >
          <PuzzleIcon className="w-5 h-5" />
          <p>ロゴ等を入れる</p>
          <KeyIcon className="w-5 h-5" />
        </Link>
        <div className="flex items-center md:mr-auto md:ml-auto justify-center">
          <Link className="mr-5 bg-orange-100 rounded-md p-2" href="/">
            <p>1つ目</p>
          </Link>
          <Link className="mr-5 bg-orange-200 rounded-md p-2" href="/">
            2つ目
          </Link>
          <Link className="mr-5 bg-orange-300 rounded-md p-2" href="/">
            3つ目
          </Link>
          <Link className="mr-5 bg-orange-400 rounded-md p-2" href="/">
            4つ目
          </Link>
        </div>
        <Button className="inline-flex py-1 px-3 mt-4 md:mt-0">
          ボタン押下 テスト
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
