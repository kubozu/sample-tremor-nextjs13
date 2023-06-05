import { PuzzleIcon } from "@heroicons/react/solid";
import { KeyIcon } from "@heroicons/react/outline";
import { Button } from "@tremor/react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <p>Navbar サンプル</p>
      <div className="mx-auto flex flex-col container p-5 items-center">
        {/* 企業ロゴ等  */}
        <Link
          className="flex items-center text-red-900 font-bold mb-4"
          href="/"
        >
          <PuzzleIcon className="w-5 h-5" />
          <p>ロゴ等を入れる</p>
          <KeyIcon className="w-5 h-5" />
        </Link>
        <div className="flex items-center justify-center">
          <Link className="mr-5" href="/">
            <p>1つ目の項目</p>
          </Link>
          <Link className="mr-5" href="/">
            2つ目の項目
          </Link>
          <Link className="mr-5" href="/">
            3つ目の項目
          </Link>
          <Link className="mr-5" href="/">
            4つ目の項目
          </Link>
        </div>
        <Button className="inline-flex py-1 px-3 mt-4">
          ボタン押下 テスト
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
