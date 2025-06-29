import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SunMoon, 
  AlertTriangle, 
  Leaf, 
  RotateCcw,
  Moon,
  Sun,
  Brain,
  Weight,
  Shield,
  Frown,
  Clock,
  Smartphone,
  Coffee,
  Lightbulb
} from "lucide-react";

export function HealthInfoSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Night vs Day Sleep */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2 space-x-reverse">
            <SunMoon className="text-yellow-500 w-5 h-5" />
            <span>الفرق بين النوم ليلاً ونهاراً</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <Moon className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-primary">النوم ليلاً</h4>
              <p className="text-sm text-muted-foreground">
                أفضل لصحة الدماغ والجسم بسبب ضبط الساعة البيولوجية وإفراز هرمون الميلاتونين
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <Sun className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-400">النوم نهاراً</h4>
              <p className="text-sm text-muted-foreground">
                يقلل جودة النوم ويؤثر على الهرمونات والساعة البيولوجية
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Disorders Harms */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2 space-x-reverse">
            <AlertTriangle className="text-red-500 w-5 h-5" />
            <span>أضرار اضطراب النوم</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3 space-x-reverse text-muted-foreground">
            <Brain className="text-red-400 w-4 h-4 flex-shrink-0" />
            <span className="text-sm">ضعف التركيز والذاكرة</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse text-muted-foreground">
            <Weight className="text-red-400 w-4 h-4 flex-shrink-0" />
            <span className="text-sm">زيادة الوزن وبطء الأيض</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse text-muted-foreground">
            <Shield className="text-red-400 w-4 h-4 flex-shrink-0" />
            <span className="text-sm">ضعف جهاز المناعة</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse text-muted-foreground">
            <Frown className="text-red-400 w-4 h-4 flex-shrink-0" />
            <span className="text-sm">مشاكل نفسية ومزاجية</span>
          </div>
        </CardContent>
      </Card>

      {/* Natural Sleep Tips */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2 space-x-reverse">
            <Leaf className="text-green-500 w-5 h-5" />
            <span>نصائح لتنظيم النوم طبيعياً</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3 space-x-reverse text-muted-foreground">
            <Clock className="text-green-400 w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">النوم والاستيقاظ في نفس التوقيت يومياً</span>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse text-muted-foreground">
            <Smartphone className="text-green-400 w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">تقليل استخدام الهاتف قبل النوم بساعة</span>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse text-muted-foreground">
            <Coffee className="text-green-400 w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">تجنب الكافيين بعد الساعة 2 مساءً</span>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse text-muted-foreground">
            <Lightbulb className="text-green-400 w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">استخدام إضاءة خافتة قبل النوم</span>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Cycle Info */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2 space-x-reverse">
            <RotateCcw className="text-blue-500 w-5 h-5" />
            <span>دورات النوم</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>دورة النوم الكاملة تستغرق حوالي 90 دقيقة وتتكون من:</p>
          <ul className="space-y-1 mr-4">
            <li>• النوم الخفيف (10-15 دقيقة)</li>
            <li>• النوم العميق (45-60 دقيقة)</li>
            <li>• نوم الأحلام REM (15-20 دقيقة)</li>
          </ul>
          <p className="text-blue-400 mt-3">
            الاستيقاظ في نهاية الدورة يجعلك تشعر بالنشاط أكثر
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
